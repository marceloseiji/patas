create database patas
default character set utf8mb4
default collate utf8mb4_general_ci;

create table pet (
	pet_id int not null auto_increment,
    servico_id int not null,
    historico_id int not null,
    pet_nome varchar(50) not null,
    pet_foto varchar(255),
    pet_nascimento date,
    pet_raca varchar(50),
    pet_genero varchar(1),
    primary key (pet_id),
    foreign key (servico_id) references servico(servico_id),
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
    servico_data date,
    servico_valor decimal,
    primary key (servico_id)
)default charset = UTF8MB4;