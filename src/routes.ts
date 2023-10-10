import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/LIstUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { CreateProfileController} from "./controller/profile/CreateProfileController";
import { AuthenticateUserController } from "./controller/autentication/AuthenticateUserController";
import { ensureAuthenticated} from "./middleware/ensureAuthenticated";
import { CreateFilmeController } from "./controller/filme/CreateFilmeController";
import { UpdateFilmeController } from "./controller/filme/UpdateFilmeController";
import { DeleteFilmeController } from "./controller/filme/DeleteFilmeController";
import { ListFilmeController } from "./controller/filme/ListFilmeController";
import { ListGeneroController } from "./controller/genero/ListGeneroController";
import { CreateGeneroController } from "./controller/genero/CreateGeneroController";
import { UpdateGeneroController } from "./controller/genero/UpdateGeneroController";
import { DeleteGeneroController } from "./controller/genero/DeleteGeneroController";
import { ListLocacaoController } from "./controller/locacao/ListLocacaoController";
import { CreateLocacaoController } from "./controller/locacao/CreateLocacaoController";
import { UpdateLocacaoController } from "./controller/locacao/UpdateLocacaoController";
import { DeleteLocacaoController } from "./controller/locacao/DeleteLocacaoController";



// User
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const createUserController  = new CreateUserController();
const createProfileController = new CreateProfileController();
const authenticateUserController  = new AuthenticateUserController();
const listUsersController= new ListUsersController();
const router = Router();
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users", deleteUserController.handle);

// Profile
router.post("/profile", createProfileController.handle);

// Filmes
const listFilmeController = new ListFilmeController();
const createFilmeController = new CreateFilmeController();
const updateFilmeController = new UpdateFilmeController();
const deleteFilmeController = new DeleteFilmeController();

router.get("/filmes", listFilmeController.handle);
router.post("/filmes", createFilmeController.handle);
router.put("/filmes", updateFilmeController.handle);
router.delete("/filmes", deleteFilmeController.handle);

//Genero
const listGeneroController = new ListGeneroController();
const createGeneroController = new CreateGeneroController();
const updateGeneroController = new UpdateGeneroController();
const deleteGeneroController = new DeleteGeneroController();

router.get("/genero", listGeneroController.handle);
router.post("/genero", createGeneroController.handle);
router.put("/genero", updateGeneroController.handle);
router.delete("/genero", deleteGeneroController.handle);

//Locacao
const listLocacaoController = new ListLocacaoController();
const createLocacaoController = new CreateLocacaoController();
const updateLocacaoController = new UpdateLocacaoController();
const deleteLocacaoController = new DeleteLocacaoController();

router.get("/locacao", listLocacaoController.handle);
router.post("/locacao", createLocacaoController.handle);
router.put("/locacao", updateLocacaoController.handle);
router.delete("/locacao", deleteLocacaoController.handle);




export {router}