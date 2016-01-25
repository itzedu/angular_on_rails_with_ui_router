class ChangeHeightColumn2 < ActiveRecord::Migration
  def change
  	change_column :players, :height, :string
  end
end
