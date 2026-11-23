update auth.users
set encrypted_password = extensions.crypt('Vilela7391Loja', extensions.gen_salt('bf')),
    updated_at = now()
where lower(email) = 'ricardocontreras102030@gmail.com';

select email,
       encrypted_password = extensions.crypt('Vilela7391Loja', encrypted_password) as senha_confere
from auth.users;
