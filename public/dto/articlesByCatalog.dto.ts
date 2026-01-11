import { ArticleDto } from "./article.dto"

export type ArtilesByCategory = {
    id:string,
    name :string,
    articles : ArticleDto[]
}