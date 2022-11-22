import UsersModel from "../models/Users.model.js";
import DatosPersonalesModel from "../models/DatosPersonales.model.js";

////
export const listahhh = async (req, res) => {
  try {
    const ahhhh = DatosPersonalesModel([
      {
        TipoPerso: "Administrador",
        Nombre: "Juan Rosado Manchado",
        Genero: "Masculino",
        FecNac: "1990-09-09",
        Edad: "32",
        RFC: "XDF1889654778",
        CURP: "SDF188965477887LA7",
        Telefono: "963-143-76-88",
        Correo: "esteañoeselbueno@hotmail.com",
        CvDirecc: "1",
      },
      {
        TipoPerso: "Proveedor",
        Nombre: "Rosalia Ruedas Calles",
        Genero: "Femenino",
        FecNac: "1980-09-09",
        Edad: "25",
        RFC: "SDF1889654778",
        CURP: "WEF188965477887LA2",
        Telefono: "963-113-45-54",
        Correo: "daskjs@outlook.com",
        CvDirecc: "2",
      },
      {
        TipoPerso: "Administrador",
        Nombre: "Juan Rodas Menchaca",
        Genero: "Masculino",
        FecNac: "1970-09-09",
        Edad: "26",
        RFC: "ASF1889654778",
        CURP: "AHF188965477887LA8",
        Telefono: "963-114-67-73",
        Correo: "jfkMaster@hotmail.com",
        CvDirecc: "3",
      },
      {
        TipoPerso: "Empleado",
        Nombre: "Rosario Manchado Ruedas",
        Genero: "Femenino",
        FecNac: "1990-08-08",
        Edad: "23",
        RFC: "HFF1889654778",
        CURP: "HTF188965477887LA3",
        Telefono: "963-117-43-56",
        Correo: "fgmovil@gmail.com",
        CvDirecc: "4",
      },
      {
        TipoPerso: "Empleado",
        Nombre: "Apolinar Calles Rosado",
        Genero: "Masculino",
        FecNac: "1980-08-08",
        Edad: "25",
        RFC: "ngvgvfcwfdc d",
        CURP: "d<medjbehdved v cd",
        Telefono: "7854692561",
        Correo: "4@test.com",
        CvDirecc: "4",
      },
      {
        CvTipoPerso: "Administrador",
        Nombre: "Rosario Alfaro Urias",
        Genero: "Femenino",
        FecNac: "1970-08-08",
        Edad: "68",
        RFC: ",enjsbsfbehsbsbf",
        CURP: "mjssbsdjbsjsbsdb",
        Telefono: "9865357458",
        Correo: "5test@uwu.com",
        CvDirecc: "1",
      },
      {
        CvTipoPerso: "Administrador",
        Nombre: "Guadalupe Ortiz Alfaro",
        Genero: "Femenino",
        FecNac: "1990-07-07",
        Edad: "98",
        RFC: "fu efyvefyv e",
        CURP: "sndhv d v",
        Telefono: "7854698523",
        Correo: "miku@ahhhh.com",
        CvDirecc: "4",
      },
      {
        CvTipoPerso: "Cliente",
        CvNombre: "Rosalia Calles Urias",
        Genero: "Femenino",
        FecNac: "1990-05-05",
        Edad: "56",
        RFC: "bg fr rx r",
        CURP: "iwe uheg eynv",
        Telefono: "9657458769",
        Correo: "correo@correo@correo.dev",
        CvDirecc: "2",
      },
      {
        CvTipoPerso: "Administrador",
        Nombre: "Rosario Urias Ruedas",
        Genero: "Femenino",
        FecNac: "1980-05-05",
        Edad: "22",
        RFC: "jwnugdydbwtdb",
        CURP: "kwjdunydgby",
        Telefono: "9635897456",
        Correo: "hagowebs@enwordpress.com",
        CvDirecc: "1",
      },
    ]);
    await ahhhh.save();
    res.json(ahhhh);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};
////

export const listDatosPersonale = async (req, res) => {
  try {
    const datosList = await DatosPersonalesModel.find().lean();
    res.json(datosList);
  } catch (error) {
    res.status(500).json({ error: "Error al listar los datos personales" });
  }
};

export const listUsers = async (req, res) => {
  try {
    const usersList = await UsersModel.find().lean();
    res.json(usersList);
  } catch (error) {
    res.status(500).json({ error: "Error al listar los usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = UsersModel(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const userToUpdate = async (req, res) => {
  try {
    console.log(req.params._id);
    const userToUpdate = await UsersModel.findById(req.params._id).lean();
    console.log({ userToUpdate });
    res.json(userToUpdate);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const userUpdated = await UsersModel.findByIdAndUpdate(_id, req.body);
    res.json({ userUpdated });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    await UsersModel.findByIdAndDelete(_id);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { _id } = req.params;
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const { Password } = await UsersModel.findById(_id);

    if (newPassword === confirmNewPassword) {
      if (oldPassword !== newPassword) {
        if (oldPassword === Password) {
          const result = await UsersModel.updateOne(
            { _id: _id },
            { Password: newPassword }
          );
          console.log(result, "result");
          res.json({
            message: "Contraseña actualizada",
            result: "si",
          });
        } else {
          res.json({
            message: "La contraseña no pertenece al usuario",
          });
        }
      } else {
        res.json({
          message: "La contraseña actual y la nueva no deben coincidir",
        });
      }
    } else {
      res.json({ message: "Confirme la contraseña" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la contraseña" });
  }
};

export const login = async (req, res) => {
  try {
    const userlogin = await UsersModel.findOne("CvPerso", 1);
    res.json({ userlogin });
  } catch (error) {
    res.status(500).json({ error: "Error al loguear usuario" });
  }
};

// Login
export const LoginXD = async (req, res) => {
  const { Login, Password } = req.body;
  const response = await UsersModel.findOne({ Login: Login });
  if (response === null) {
    res.json({ message: "Usuario no encontrado" });
  } else {
    // * Si existe el usuario

    if (response.StateAcount === "on") {
      //fechas
      const dateServer = new Date(),
        dateIniUser = response.DateStarts,
        dateFinUser = response.DateEnds;

      if (dateIniUser <= dateServer && dateFinUser >= dateServer) {
        // Password auth
        if (response.Password === Password) {
          const { _id, Login, Password } = response;
          res.json({
            message: "Logueo correcto",
            usuario: {
              _id,
              Login,
              Password,
            },
          });
        } else {
          res.json({ message: "Contraseña incorrecta" });
        }
      } else if (dateFinUser < dateServer) {
        const result = await UsersModel.updateOne(
          { _id: response._id },
          { StateAcount: "" }
        );
        console.log(result);
        res.json({
          message: "La cuenta excedió su límite",
        });
      } else if (dateIniUser > dateServer) {
        res.json({
          message:
            "La cuenta aún no está activada, comuníquese con el administrador",
        });
      }
    } else {
      res.json({ message: "La cuenta está inactiva" });
    }
  }
};
