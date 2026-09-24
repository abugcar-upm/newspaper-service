import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Article} from '../interfaces/article';
import { NgClass } from '@angular/common';
import { Highlight } from '../directives/highlight';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { NewspaperLocalService } from '../services/newspaper-local';
import { Ng2SearchPipe } from '../pipes/ng2-search-pipe.pipe';

@Component({
  imports: [FormsModule, NgClass, Highlight, CommonModule, Ng2SearchPipe],
  selector: 'app-newspaper-with-service',
  styleUrl: './newspaper-with-service.css',
  templateUrl: './newspaper-with-service.html',
})

export class NewspaperWithService {
  article!: Article;
  articlesList!: Article[];
  articleToShow!: Article;
  term!: string;
  @ViewChild('articleForm') articleForm: any;

  constructor(private newspaperLocalService: NewspaperLocalService) {
    
  }

  ngOnInit(): void {
    this.articlesList = this.newspaperLocalService.retrieveArticles();
    this.article = {
      id: 0,
      title: '',
      subtitle: '',
      body: '',
      abstract: '',
      category: 'National',
    };
  }

  show(articleToShow: Article): void {
    this.articleToShow = articleToShow;
  }

  submitForm(): void {
    window.alert("The article "+ this.article.title + " has been published");
    this.newspaperLocalService.addArticleToList(this.article);
    this.articleForm.resetForm();
  }

}