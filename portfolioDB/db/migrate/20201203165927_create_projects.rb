class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :walkthrough
      t.string :github
      t.string :description

      t.timestamps
    end
  end
end
