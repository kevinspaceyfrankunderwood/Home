class CreateEmployeeRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :employee_roles do |t|
      t.belongs_to :employee, foreign_key: true
      t.belongs_to :role, foreign_key: true
      t.belongs_to :hotel, foreign_key: true

      t.timestamps
    end
  end
end
