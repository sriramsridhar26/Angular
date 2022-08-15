import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfExistsService } from './if-exists.service';
import { LeavesComponent } from './leaves/leaves.component';
import { BalanceComponent } from './leaves/balance/balance.component';
import { CasualComponent } from './leaves/balance/casual/casual.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeavesComponent,
    BalanceComponent,
    CasualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IfExistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
