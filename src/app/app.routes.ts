import { Routes } from '@angular/router';
import { ProdutoComponent} from './produto/produto.component';
import { ListagemComponent } from './listagem/listagem.component';

export const routes: Routes = [{path: 'produto/:id', component: ProdutoComponent},
                               {path: 'listagem', component: ListagemComponent}];
