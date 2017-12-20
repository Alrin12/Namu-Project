import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { MainComponent } from './main/main.component';
// 라우트에 해당되는 것이 없을 때 나타나는 페이지
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { MainLeftComponent } from './main/main-left/main-left.component';
import { FeedModule } from './shared/feed/feed.module';
import { FeedComponent } from './shared/feed/feed.component';

import { ProfileComponent } from './profile/profile.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { TopicComponent } from './topic/topic.component';
// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'login/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainFeedComponent, canActivate: [LoginGuard],
    children: [
      { path: 'leftmenu', component: MainLeftComponent }
    ]
  },
  { path: 'feed', component: FeedComponent, canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'maintest', component: MainComponent },
  { path: 'detail', component: QuestionDetailComponent , canActivate: [LoginGuard] },
  { path: 'topic', component: TopicComponent, canActivate: [LoginGuard] },
  { path: '**', component: NotFoundComponent},
  // 필수 추가 요망
  // 메인피드 임시 path 입니다
  { path: 'main', component: MainFeedComponent, canActivate: [LoginGuard] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    LoginModule,
    FeedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
