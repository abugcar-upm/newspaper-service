import { Service, ViewChild } from '@angular/core';
import { Article } from '../interfaces/article';

@Service()
export class NewspaperLocalService {
    article!: Article;
    articlesList: Article[];
    @ViewChild('articleForm') articleForm: any;

    constructor() {
        this.articlesList = [
            { id: 1, title: "Title 1", subtitle: "Subtitle 1", body: "Body 1", abstract: "Abstract 1", category: "National" },
            { id: 2, title: "Title 2", subtitle: "Subtitle 2", body: "Body 2", abstract: "Abstract 2", category: "International" },
            { id: 3, title: "Title 3", subtitle: "Subtitle 3", body: "Body 3", abstract: "Abstract 3", category: "Sports" },
        ];
    }

    retrieveArticles(): Article[] {
        return this.articlesList;
    }

    retrieveArticlebyId(id: number): Article | undefined {
       return this.articlesList[id];
    }

    addArticleToList(article: Article): void {
        let newArticle: Article = {
            id: this.articlesList.length + 1,
            title: article.title,
            subtitle: article.subtitle,
            body: article.body,
            abstract: article.abstract,
            category: article.category,
        };
        this.articlesList.push(newArticle);
    }
}
