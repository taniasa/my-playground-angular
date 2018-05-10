import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aplicacao', component: AplicacaoComponent },
  { path: 'relatorio', component: RelatorioComponent }
  ];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ]
  })

export class AppRoutingModule { }
