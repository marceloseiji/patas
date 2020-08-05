create database patas
default character set utf8mb4
default collate utf8mb4_general_ci;

create table pet (
	pet_id int not null auto_increment,
    historico_id int not null,
    pet_nome varchar(50) not null,
    pet_foto varchar(255),
    pet_nascimento date,
    pet_raca varchar(50),
    pet_genero varchar(1),
    primary key (pet_id),
    foreign key (historico_id) references historico(historico_id)
)default charset = UTF8MB4;

create table dono (
	dono_id int not null auto_increment,
    pet_id int not null,
    dono_nome varchar(255) not null,
    primary key (dono_id),
    foreign key (pet_id) references pet(pet_id)
)default charset = UTF8MB4;

create table historico (
	historico_id int not null auto_increment,
    servico_id int not null,
    primary key (historico_id),
    foreign key (servico_id) references servico(servico_id)
)default charset = UTF8MB4;

create table servico (
	servico_id int not null auto_increment,
    servico_descricao varchar(255),
    pet_id int,
    primary key (servico_id),
    foreign key (pet_id) references pet(pet_id)
)default charset = UTF8MB4;

insert into dono(dono_nome)
values('Marcelo');

insert into pet(historico_id, pet_nome, pet_foto, pet_nascimento, pet_raca, pet_genero)
values(1, "Dark Maru", "url foto", "2008/01/10", "Dark Wolf", "M");

insert into pet(historico_id, pet_nome, pet_foto, pet_nascimento, pet_raca, pet_genero)
values(1, "Pet Teste", "url foto", "2008/01/10", "Dark Wolf", "M");

insert into pet(historico_id, pet_nome, pet_foto, pet_nascimento, pet_raca, pet_genero)
values(1, 'Paul', 'reference', '2020/01/01', 'undefined', 'M');

insert into servico(servico_descricao, pet_id)
values('Banho e tosa', 129);

insert into servico(servico_descricao, pet_id)
values('Desvermifugação', 129);

select * from dono;
delete from pet where pet_id between 4 and 50;
select * from pet;
delete from servico where pet_id is null;
delete from servico where servico_id = 13;

select * from servico;
update pet
set dono_id = 1
where pet_id = 3;

ALTER TABLE pet
ADD foto_path varchar(255);
