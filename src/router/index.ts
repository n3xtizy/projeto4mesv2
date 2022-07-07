import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'home',
    component: () => import("../views/secretaria/FormDetalharSecretaria.vue")
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import("../views/convenio/ConvenioView.vue")
  },
  {
    path: '/convenio/cadastrar',
    name: 'formCadastrarConvenio',
    component: () => import("../views/convenio/FormCadastrarConvenio.vue")
  },
  {
    path: '/convenio/detalhar',
    name: 'detalharConvenio',
    component: () => import("../views/convenio/FormDetalharConvenio.vue")
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import("../views/especialidade/EspecialidadeView.vue")
  },
  {
    path: '/especialidade/cadastrar',
    name: 'cadastrarEspecialidade',
    component: () => import("../views/especialidade/FormCadastrarEspecialidade.vue")
  },
  {
    path: '/especialidade/detalhar',
    name: 'detalharEspecialidade',
    component: () => import("../views/especialidade/FormDetalharEspecialidade.vue")
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import("../views/medico/MedicoView.vue")
  },
  {
    path: '/medico/cadastrar',
    name: 'cadastrarMedico',
    component: () => import("../views/medico/FormCadastrarMedico.vue")
  },
  {
    path: '/medico/detalhar',
    name: 'detalharMedico',
    component: () => import("../views/medico/FormDetalharMedico.vue")
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import("../views/paciente/PacienteView.vue")
  },
  {
    path: '/paciente/cadastrar',
    name: 'cadastrarPaciente',
    component: () => import("../views/paciente/FormCadastrarPaciente.vue")
  },
  {
    path: '/paciente/detalhar',
    name: 'detalharPaciente',
    component: () => import("../views/paciente/FormDetalharPaciente.vue")
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import("../views/secretaria/SecretariaView.vue")
  },
  {
    path: '/secretaria/cadastrar',
    name: 'cadastrarSecretaria',
    component: () => import("../views/secretaria/FormCadastrarSecretaria.vue")
  },
  {
    path: '/secretaria/detalhar',
    name: 'detalharSecretaria',
    component: () => import("../views/secretaria/FormDetalharSecretaria.vue")
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import("../views/agenda/AgendaView.vue")
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import("../views/historico/HistoricoView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
