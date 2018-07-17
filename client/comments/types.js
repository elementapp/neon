export type CommentProps = {
  authorId: string,
  comment: string,
  createdAt: string,
  videoTimestamp?: string,
};

export type CommentThreadProps = {
  rootComment: CommentProps,
  replies: Array<CommentProps>,
};
