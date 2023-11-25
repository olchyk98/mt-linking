use std::rc::Rc;
use ratatui::{prelude::{Layout, Constraint, Direction, Rect}, widgets::{List, ListItem, HighlightSpacing}, Frame, style::{Style, Color}};

use crate::types::State;

pub fn get_app_vertical_layout (frame: &Frame) -> Rc<[Rect]> {
  Layout::default()
    .direction(Direction::Vertical)
    .constraints([
      Constraint::Percentage(50),
      Constraint::Percentage(50),
    ])
    .split(frame.size())
}

pub fn get_screen_widget<'a> (application_state: &State, screen_index: usize) -> Option<List<'a>> {
  let screen_files = application_state.get_files_for_pane(screen_index)?;

  let list_items: Vec<ListItem<'_>> = screen_files
    .iter()
    .map(|screen_file| {
      ListItem::new(screen_file.name.to_owned())
    })
    .collect();


  Some(
    List::new(list_items)
      .highlight_style(Style::default().fg(Color::LightRed))
      .highlight_symbol(">")
      .highlight_spacing(HighlightSpacing::WhenSelected)
  )
}
