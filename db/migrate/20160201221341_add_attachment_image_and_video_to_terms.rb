class AddAttachmentImageAndVideoToTerms < ActiveRecord::Migration
  def self.up
    change_table :terms do |t|
      t.attachment :image
      t.text :video_url
    end
  end

  def self.down
    remove_attachment :terms, :image
    remove_column :terms, :video_url
  end
end
