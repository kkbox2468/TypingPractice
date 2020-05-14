class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    @msg = Message.new(msg_params)
    ActionCable.server.broadcast "room_channel_#{@msg.room_id}", content: @msg.content
  end

  private
  def msg_params
    params.require(:message).permit(:content, :room_id)
  end
end
