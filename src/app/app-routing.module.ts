import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	 {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },	
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'addmoney',
    loadChildren: () => import('./addmoney/addmoney.module').then( m => m.AddmoneyPageModule)
  },
  {
    path: 'book-ticket',
    loadChildren: () => import('./book-ticket/book-ticket.module').then( m => m.BookTicketPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'favorited',
    loadChildren: () => import('./favorited/favorited.module').then( m => m.FavoritedPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'item-info',
    loadChildren: () => import('./item-info/item-info.module').then( m => m.ItemInfoPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'mall',
    loadChildren: () => import('./mall/mall.module').then( m => m.MallPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'pay-or-send',
    loadChildren: () => import('./pay-or-send/pay-or-send.module').then( m => m.PayOrSendPageModule)
  },
  {
    path: 'paymentsuccessful',
    loadChildren: () => import('./paymentsuccessful/paymentsuccessful.module').then( m => m.PaymentsuccessfulPageModule)
  },
  {
    path: 'phonerecharge',
    loadChildren: () => import('./phonerecharge/phonerecharge.module').then( m => m.PhonerechargePageModule)
  },
  {
    path: 'promocode',
    loadChildren: () => import('./promocode/promocode.module').then( m => m.PromocodePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition.module').then( m => m.ConditionPageModule)
  },
  {
    path: 'getpayment',
    loadChildren: () => import('./getpayment/getpayment.module').then( m => m.GetpaymentPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
