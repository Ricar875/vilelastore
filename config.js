select email,
       encrypted_password = extensions.crypt('Vilela7391Loja', encrypted_password) as senha_confere
from auth.users;
