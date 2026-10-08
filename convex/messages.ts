import { v } from 'convex/values'
import { auth } from './auth'
import { mutation } from './_generated/server'


export const create = mutation({
    args: {
        body: v.string(), 
        image: v.optional(v.id("_storage")), 
        workspaceId: v.id("workspaces"), 
        channelId: v.optional(v.id("channels")), 
        parentMessageId: v.optional(v.id("messages"))
        //TODO: add conversation id.
    }, 
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx)

        if (!userId) {
            throw new Error("Unauthorized")
        }
    }
})
