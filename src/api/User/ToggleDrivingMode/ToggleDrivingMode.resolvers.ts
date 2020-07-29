import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { ToggleDrivingModeResponse }'../../../types/graph'
import User from "src/entities/User";
const resolvers: Resolvers = {
    Mutation: {
        ToggleDrivingMode: privateResolver(async(_, __, {req}): Promise<ToggleDrivingModeResponse> => {
            const user:User = req.user;
            user.isDriving = !user.isDriving;
        })
    }
}

export default resolvers;