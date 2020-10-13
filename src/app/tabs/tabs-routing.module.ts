import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'mall',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mall/mall.module').then(m => m.MallPageModule)
          }
        ]
      },
      {
        path: 'PayOrSend',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pay-or-send/pay-or-send.module').then(m => m.PayOrSendPageModule)
          }
        ]
      },  
		
	   {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
          }
        ]
      },  
	  {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
