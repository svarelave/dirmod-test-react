export const roleId = Object.freeze({
  ROOT: 1,
  MODERATOR: 2,
  USER: 3,

  getDisplayName(role: number) {
    switch (role) {
      case roleId.ROOT:
        return "Administrador";
      case roleId.MODERATOR:
        return "Moderador";
      case roleId.USER:
        return "Usuario";
      default:
        return "";
    }
  },
});
