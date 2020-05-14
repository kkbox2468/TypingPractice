class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    @msg = Message.new(msg_params)
    @msg.hero = current_hero
    ActionCable.server.broadcast "room_channel_#{@msg.room_id}", content: @msg.content, message: @msg
  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id, :hero_id)
  end
end
