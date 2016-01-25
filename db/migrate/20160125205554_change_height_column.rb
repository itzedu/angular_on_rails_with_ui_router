class ChangeHeightColumn < ActiveRecord::Migration
  def change
  	change_column :players, :height, :float
  end
end
