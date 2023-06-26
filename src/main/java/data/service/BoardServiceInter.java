package data.service;

import data.dto.BoardDto;

import java.util.List;
import java.util.Map;

public interface BoardServiceInter {
    public void insertBoard(BoardDto dto);
    public List<BoardDto> getPagingList(int start,int perpage);
    public void updateReadcount(int num);
    public BoardDto detailPage(int num);
    public void deleteBoard(int num);
    public int getTotalCount();
}
