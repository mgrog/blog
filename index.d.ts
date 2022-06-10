type ImgProps = {
  blurDataURL: string;
  src: string;
  height: number;
  width: number;
  type?: string | undefined;
};

type MetaData = {
  postId: string;
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
  published: string;
  imgProps: ImgProps;
};
