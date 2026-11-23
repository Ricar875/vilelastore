with p as (select 'Vilela7391Loja'::text as s),
u as (
  update auth.users
  set encrypted_password = extensions.crypt((select s from p), extensions.gen_salt('bf')),
      updated_at = now()
  where lower(email) = 'ricardocontreras102030@gmail.com'
  returning email, encrypted_password
)
select u.email,
       u.encrypted_password = extensions.crypt((select s from p), u.encrypted_password) as senha_confere
from u;
