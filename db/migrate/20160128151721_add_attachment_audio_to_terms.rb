class AddAttachmentAudioToTerms < ActiveRecord::Migration
  def self.up
    change_table :terms do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :terms, :audio
  end
end
