const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        user: async (_, { id, username }) => {
          try {
            const foundUser = await User.findOne({
              $or: [{ _id: id }, { username: username }],
            });
    
            if (!foundUser) {
              throw new Error("Can't find a user with this id or username");
            }
    
            return foundUser;
          } catch (error) {
            throw new Error('Failed to fetch user');
          }
        },
    
    Mutation: {
        createUser: async (parent, { input }) => {
            try {
                const user = await User.create({input});

                if(!user) {
                    throw new Error("Something is wrong!");
                }

                const token = signToken(user);
                return { token, user };
            } catch (error) {
                throw new Error("Can't create this user");
            }
        },
        
    }
      },

}