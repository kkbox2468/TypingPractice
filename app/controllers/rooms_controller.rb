class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end
  def create
    @rooms = Room.new
  end
end
