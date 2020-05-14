class MessagesController < ApplicationController
  def new
    @message = Message.new
  end
  def create
    if params[:right_input]
      @msg_right = Message.create(msg_params)
      ActionCable.server.broadcast "room_channel_#{message.room_id}", content: @msg_right.content, type: 'right'
    else
      @msg_left = Message.create(msg_params)
      ActionCable.server.broadcast "room_channel_1", content: @msg_left.content, type: 'left'
    end

  end

  private
  def msg_params
    params.require(:message).permit(:content)
  end
end
