class Subdepartment < ApplicationRecord
  belongs_to :department
  has_many :jobs 
  has_many :budgets
end
