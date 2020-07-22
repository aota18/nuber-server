import { SayHelloResponse } from '../../../types/graph';


const resolvers = {
    Query: {
        sayHello: (): SayHelloResponse => {
            return {
                error: false,
                text: "love you"
            };
        }
    }
};

export default resolvers;