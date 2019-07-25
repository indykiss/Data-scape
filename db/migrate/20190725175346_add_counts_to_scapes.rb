class AddCountsToScapes < ActiveRecord::Migration[5.2]
  def change
    add_column :scapes, :counts, :integer
  end
end
