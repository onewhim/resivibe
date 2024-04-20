//
//  Item.swift
//  Resivibe
//
//  Created by Lucas Quinn on 20/04/2024.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
