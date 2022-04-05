import React from 'react'
import { AddArticle } from '../components/AddArticle'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Article } from '../components/Article'
import { Dispatch } from "redux"
import {addArticle, removeArticle } from '../store/actionCreators'

export default function Redux() {

    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
      )
    
      const dispatch: Dispatch<any> = useDispatch()
    
      const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
      )
    
  return (
    <main>
      <div className='App'>
  
  <h1>My Articles</h1>
  <AddArticle saveArticle={saveArticle} />
  {articles.map((article: IArticle) => (
    <Article
      key={article.id}
      article={article}
      removeArticle={removeArticle}
    />
  ))}   
      </div>
        </main>
  )
}
