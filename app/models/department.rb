class Department < ApplicationRecord
  has_ancestry
  
  belongs_to :hotel
  has_many :expense_categories

  validates :name, presence: { message: "Please enter the name of the department." } 
  validates :name, uniqueness: { scope: :hotel, message: "A department with that name already exists for this hotel." }
end
