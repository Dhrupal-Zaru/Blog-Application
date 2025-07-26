import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostAPI } from "../service/postApi";

export default function useDeletePost(){
    const queryClient = useQueryClient();
    const {mutate: deletePost , isLoading: isDeleting} = useMutation({
        mutationFn: deletePostAPI,
        onSuccess:()=> {
            queryClient.invalidateQueries({
                queryKey:['posts']
            })
        }
    });
    return{ deletePost, isDeleting}
}