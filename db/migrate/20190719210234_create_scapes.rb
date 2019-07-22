class CreateScapes < ActiveRecord::Migration[5.2]
  def change
    create_table :scapes do |t|
      t.string :name
      t.string :stock
      t.date :start_date
      t.date :end_date
      t.string :history

      t.timestamps
    end
  end
end
