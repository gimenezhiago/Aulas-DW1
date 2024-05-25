

-- Para mostrar as tabelas
show tables;


-- Para descrever a tabela
show tables;
describe cargo;


-- Para inserir
insert into produto (idproduto, nomepro)
values ('10', 'Tênis')
('11', 'Bandeira')


-- Para selecionar
select * from cliente;

select idcpf as cpf, nome as n, email as e, cidade c 
from pessoa as gente;


-- Para encontrar
select * from estoque as e
where idproduto > 5;

select * from estoque as e
where idproduto > 5 and estoque>=309;

select * from estoque as e
where idproduto > 5 or valorpreco = 299;


-- Para auxiliar na procura
select * from funcionario f 
where idcargo between 2 and 4;

select * from produto p 
where idproduto in(1,3,6,7);

select * from produto p 
where nomepro like '%a%a%';


-- Para ordenar
select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcpf asc;

select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcliente desc;


-- Para colocar o começo e quantidade da pesquisa
select idcliente, idstatuscli, idcpf from cliente c 
where idcpf > '565.794.681-22'
order by idcliente desc
limit 4 offset 2;


-- Para deletar
delete from pessoa where nome='Rodrigo Garro';


-- Para atualizar
update pessoa set 
cidade='Peabiru'
where nome='Gabriel Istchuk';


-- Para selecionar várias tabelas
select idproduto, idpedido 
from produto, pedido
where idproduto=idpedido;

-- Para relacionar tabela
select idproduto
from produto p
inner join estoque e
on p.idproduto= e.idproduto


-- Para relacionar tabela para esquerda
select * from estoque e
left join produto p 
on p.idproduto = e.idproduto;