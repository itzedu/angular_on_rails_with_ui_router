class AddColumnToPlayers < ActiveRecord::Migration
  def change
  	add_column :players, :height, :integer
  	add_column :players, :age, :integer
  	add_column :players, :weight, :integer
  	add_reference :players, :team, index: true
  end
end
