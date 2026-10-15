import { GetMessagesReturnType } from "@/features/messages/api/use_get_message";


interface MessageListProps {
    memberName?: string;
    memberImage?: string;
    channelName?: string;
    channelCreationTime?: number;
    variant?: "channel" | "threads" | "conversation";
    data: GetMessagesReturnType | undefined;
    loadMore: () => void;
    isLoadingMore: boolean;
    canLoadMore: boolean;
}

export const MessageList = ({memberName, memberImage, channelName, channelCreationTime, data, variant="channel", loadMore, isLoadingMore, canLoadMore}: MessageListProps) => {
    return (
        <div className="flex-1 flex flex-col-reverse pb-4 overflow-y-auto messages-scrollbar">

        </div>
    )
}