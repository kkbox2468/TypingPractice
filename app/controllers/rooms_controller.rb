class RoomsController < ApplicationController
  def index
    @rooms = Room.new
    @rooms_list = Room.all
  end
  def show
    @room = Room.find(params[:id])
    @message = Message.new
    test_topic = "It’s not about ideas. It’s about making ideas happen."
    @topic = test_topic.split(//)
  end
  def create
    @rooms = Room.new(room_data)
    if @rooms.save
      redirect_to rooms_path
    else
      render json: room_data
    end
  end

  def edit
    @rooms = Room.find(params[:id])
  end
  def update
    @room = Room.find(params[:id])
    if @room.update(room_data)
      redirect_to rooms_path
    else
      render json: room_data
    end
  end

  private
  def room_data
    params.require(:room).permit(:name, :description)
  end
end
