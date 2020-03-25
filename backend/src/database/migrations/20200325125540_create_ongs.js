exports.up = function(knex) {       //método up é responsável pela criação da tabela
  return knex.schema.createTable('ongs', function(table) {
     table.string('id').primary();  //valor dos campos
     table.string('name').notNullable();
     table.string('email').notNullable();
     table.string('whatsapp').notNullable();
     table.string('city').notNullable();
     table.string('uf', 2).notNullable();   // 2 = tamanho da string
  });
};

exports.down = function(knex) {     //método down é para quando precisa desfazer algo
  return knex,schema.droptable('ongs');
};
