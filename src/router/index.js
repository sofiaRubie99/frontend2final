import { createRouter, createWebHistory } from 'vue-router';
import BookList from '../components/BookList.vue';
import BookDetail from '../components/BookDetail.vue';
import AuthorList from '../components/AuthorList.vue';
import AuthorDetail from '../components/AuthorDetail.vue';
import PublisherList from '../components/PublisherList.vue';
import PublisherDetail from '../components/PublisherDetail.vue';

const routes = [
  {path: '/', redirect: '/books'},
  { path: '/books', component: BookList },
  { path: '/books/:id', component: BookDetail },
  { path: '/authors', component: AuthorList },
  { path: '/authors/:id', component: AuthorDetail },
  { path: '/publishers', component: PublisherList },
  { path: '/publishers/:id', component: PublisherDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
