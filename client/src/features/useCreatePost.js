import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostAPI } from "../service/postApi";

export default function useCreatePost(){
    const queryClient = useQueryClient();
    const {mutate: createPost , isLoading: isCreating} = useMutation({
        mutationFn: createPostAPI,
        onSuccess:()=> {
            queryClient.invalidateQueries({
                queryKey:['posts']
            })
        }
    });
    return{ createPost, isCreating}
}