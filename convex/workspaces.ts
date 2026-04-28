import { auth } from './auth';
import { mutation, query } from './_generated/server';

export const create = mutation({
    args: {

    }, 
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);

        if (!userId) {
            throw new Error("Unauthorized")
        }
        //TODO: Create a proper method
        const joinCode = "12345";

        const workspaceId = await ctx.db.insert("workspaces", {
            name: args.name, 
            userId, 
            joinCode,
        });

        return workspaceId;
    }, 
})

export const get = query({
    args: {}, 
    handler: async (ctx) => {
        return await ctx.db.query("workspaces").collect();
    },
});