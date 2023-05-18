import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListarComponent } from './components/listar/listar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';

const routes: Routes = [
  {path:'', component:HomeContentComponent},
  {path:'adicionarPet', component:AdicionarComponent},
  {path:'adicionarDetalhesPet', component: UpdateComponent},
  {path:'removerPet', component:DeleteComponent},
  {path:'listarPets', component:ListarComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
